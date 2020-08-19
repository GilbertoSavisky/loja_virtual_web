import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    isActive: boolean;
    collapsed: boolean;
    collapsedMenuCommerce: boolean;
    collapsedMenuCliente: boolean;
    showMenu: string;
    pushRightClass: string;

    @Output() collapsedEvent = new EventEmitter<boolean>();
    @Output() collapsedMenuCommerceEvent = new EventEmitter<boolean>();
    @Output() collapsedMenuClienteEvent = new EventEmitter<boolean>();

    constructor(public router: Router) {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.isActive = false;
        this.collapsed = false;
        this.collapsedMenuCommerce = false;
        this.collapsedMenuCliente = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
    }

    eventCalled() {
        console.log('eventCalled');
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    addExpandEComerce(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    }

    toggleCollapsedMenu(id: string) {
        if (id === 'idCommerce') {
            this.collapsedMenuCommerce = !this.collapsedMenuCommerce;
            this.collapsedMenuCommerceEvent.emit(this.collapsedMenuCommerce);
            this.collapsedMenuCliente = false;
        } else {
            this.collapsedMenuCliente = !this.collapsedMenuCliente;
            this.collapsedMenuClienteEvent.emit(this.collapsedMenuCliente);
            this.collapsedMenuCommerce = false;
        }
    }

    isToggled(): boolean {
        console.log('isToggled');
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        console.log('sdfs')
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }

    funcao1() {
        alert("Eu sou um alert!");
    }
    show(e) {
        var dropdown = document.getElementsByClassName("dropdown-btn");
        var dropdownContent = document.getElementsByClassName("dropdown-container") as HTMLCollectionOf<HTMLElement>;
        var i;
        // body.classList.remove("className");   //remove the class
        // body.classList.add("className");

        dropdown[0].classList.add("active");
        if (dropdownContent[0].style.display === "block") {
            dropdownContent[0].style.display = "none";
            //dropdown[0].classList.remove("active");
        } else {
            dropdownContent[0].style.display = "block";
        }

    }
    myFunction(id) {
        let x = document.getElementById(id);
        //console.log(x);


        if (x.className.indexOf("ativo") == -1) {
            x.className += " ativo";
            // x.previousElementSibling.className =
            //     x.previousElementSibling.className.replace("inativo", "ativo");
        } else if (x.className.indexOf("inativo") == -1) {
            x.className = x.className.replace(" ativo", " inativo");
        } else {
            x.className = x.className.replace(" inativo", " ativo");
            // x.previousElementSibling.className =
            //     x.previousElementSibling.className.replace("ativo", "inativo");
        }
    }
}
