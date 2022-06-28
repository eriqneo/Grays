 const navTemplate = document.createElement('template')

navTemplate.innerHTML = `
       <link href="/dist/output.css" rel="stylesheet">
       <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'>
       <style>
      .mobile-menu-button:not(:checked) ~ .mobile-menu {
             display: none;
        }

          .mobile-menu-button:checked ~.mobile-menu {
                display: block;
                  }
      </style>
      <nav class="bg-blue-800 shadow-lg sticky top-0 z-50">
      <div class="max-w-6xl px-2 py-4">
          <div class="flex justify-between">
              <div class="hidden md:flex space-x-3 whitespace-nowrap">
                  <div>
                      <!--Logo-->
                      <a href="/index.html" class="flex items-center py-4">
                          <img src="/dist/images/logo .png" alt="" class="w-full mr-2 rounded-lg "> 
                      </a>
                  </div>
                      <a href="/index.html" class="py-4 px-1 text-black text-2xl hover:text-gray-100 border-b-4 border-gray-100 font-bold">Home</a>
                      <a href="about.html" class="py-4 px-1 text-gray-300 text-xl font-semibold hover:text-white hover:border-b-2 transition duration-300">About Us</a>
                      <a href="services.html" class="dropdown">
                        <button class="py-4 px-1 text-gray-300 text-xl font-semibold hover:text-white hover:border-b-2 transition duration-300">
                        Our Services<i class='bx-fw bx bx-chevron-down bx-md'></i>
                        </button> 
                         <ul class="dropdown-menu hidden absolute text-gray-300 bg-blue-800 px-5 rounded-lg">
                             <li class="hover:text-white py-2">General Surgery</li>
                             <li class="hover:text-white py-2">Obstetric & Gyanaecology</li>
                             <li class="hover:text-white py-2">E.N.T</li>
                             <li class="hover:text-white py-2">Urology</li>
                             <li class="hover:text-white py-2">Dental Surgery</li>
                             <li class="hover:text-white py-2">Optical Surgery</li>
                             <li class="hover:text-white py-2">See More ...</li>
                         </ul>
                      </a>
                      <a href="clinics.html" class="py-4 px-1 text-gray-300 text-xl font-semibold hover:text-white hover:border-b-2 transition duration-300">Special Clinics</a>
                      <a href="" class="py-4 px-1 text-gray-300 text-xl font-semibold hover:text-white hover:border-b-2 transition duration-300">Specialists</a>
                      <a href="contact.html" class="py-4 px-1 text-gray-300 text-xl font-semibold hover:text-white hover:border-b-2 transition duration-300">Contact Us</a>
                  </div>
                  <div class="hidden md:flex items-center whitespace-nowrap">
                      <a href="" class="py-2 px-2 ml-20 font-medium text-gray-800 bg-white rounded hover:bg-black hover:text-white transition duration-300">Book Appointment</a>
                  </div>
                  <!--MObile Menu Button-->
                  <div class="md:hidden flex items-center">
                      <button class="outline-none mobile-menu-button"
                      id="mobile-menu-button">
                          <svg class=" w-6 h-6 text-gray-200 hover:text-white "
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
                      </button>
                  </div>
              </div>
          </div>
          <!--Mobile Menu-->
          <div class="md:hidden mobile-menu block">
              <ul class="">
                  <li class="active"><a href="index.html" class="block text-xl px-2 py-4 text-white bg-black font-semibold">Home</a></li>
				  <li><a href="#services" class="block py-4 px-2 text-gray-300 text-sm font-semibold hover:text-white hover:border-b-2 transition duration-300">About Us</a></li>
				  <li><a href="#about" class="block py-4 px-2 text-gray-300 text-sm font-semibold hover:text-white hover:border-b-2 transition duration-300">0ur Services</a></li>
				  <li><a href="#contact" class="block py-4 px-2 text-gray-300 text-sm font-semibold hover:text-white hover:border-b-2 transition duration-300">Special Clinics</a></li>
                  <li><a href="#contact" class="block py-4 px-2 text-gray-300 text-sm font-semibold hover:text-white hover:border-b-2 transition duration-300">Specialists</a></li>
                  <li><a href="#contact" class="block py-4 px-2 mb-2 text-gray-300 text-sm font-semibold hover:text-white hover:border-b-2 transition duration-300">Book Appointment</a></li>
              </ul>
          </div>
      </div>
</nav>
<script>
    const btn = document.querySelector("button.mobile-menu-button");
	const menu = document.querySelector(".mobile-menu");

	// Add Event Listeners
	btn.addEventListener("click", () => {
	menu.classList.toggle("hidden");
	});
    
</script>
    `

class Nav extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' })
        
        shadowRoot.appendChild(navTemplate.content)
    }
    
    
}

customElements.define('nav-component', Nav)



