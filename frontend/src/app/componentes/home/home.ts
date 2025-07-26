import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Producto } from '../../services/producto';
import { FormsModule } from '@angular/forms';
import { Auth, User } from '../../services/auth';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: 'home.html',
  styleUrl: 'home.css'
})
export class Home implements OnInit {
  productos: any[] = [];
  carrito: any[] = [];
  total: number = 0;
  codigoInput: string = '';
  currentUser: User | null = null;

  private authService = inject(Auth);

  constructor(private productoService: Producto) {}

  ngOnInit(): void {
    this.productoService.listarProductos().subscribe(data => {
      this.productos = data;
    });

    // Suscribirse para obtener los datos del usuario logueado
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  logout(): void {
    this.authService.logout();
  }

  escanearProducto() {
    const codigo = this.codigoInput.trim();
    if (!codigo) return;

    const producto = this.productos.find(p => p.codigo == codigo || p.id == codigo);
    if (!producto) {
      alert('Producto no encontrado');
      return;
    }

    if (producto.cantidad <= 0) {
      alert('No hay suficiente stock');
      return;
    }

    // Verificar si ya está en el carrito
    const itemCarrito = this.carrito.find(p => p.id == producto.id);
    if (itemCarrito) {
      if (itemCarrito.cantidad < producto.cantidad) {
        itemCarrito.cantidad += 1;
      } else {
        alert('No hay suficiente stock para agregar más');
      }
    } else {
      this.carrito.push({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: 1
      });
    }

    this.calcularTotal();
    this.codigoInput = '';
  }

  calcularTotal() {
    this.total = this.carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  }
  
  resetearCarrito() {
    this.carrito = [];
    this.total = 0;
  }

  eliminarItem(item: any) {
    this.carrito = this.carrito.filter(p => p.id !== item.id);
    this.calcularTotal();
  }

  agregarDescuento() {
    alert('Funcionalidad de descuento no implementada');
  }

  procederCompra() {
    alert('Funcionalidad de compra no implementada');
  }

  generarComprobante() {
    alert('Funcionalidad de comprobante no implementada');
  }
}