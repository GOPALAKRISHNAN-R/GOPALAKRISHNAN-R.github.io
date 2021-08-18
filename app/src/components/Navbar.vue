<template>
  <div id="navbar">
    <nav class="navbar navbar-expand-lg fixed-top navbar-light">
      <div class="container">
        <router-link to="/" class="navbar-brand smooth" href="https://www.acodeidea.com">
          <img src="@/assets/img/acodeidea_logo.png" alt class="img-fluid" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item close-collapse">
              <a class="nav-link" href="https://www.acodeidea.com/">Visit Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>


<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
  updated() {
    // To close the collapse when routerlink is clicked
    $(".close-collapse>a").on("click", function () {
      $(".navbar-collapse").collapse("hide");
    });
  },
};
</script>


<style scoped>
#navbar {
  position: relative;
  width: 100%;
  z-index: 10;
}
#navbar nav {
  background: #ffffff;
}
#navbar nav li a {
  margin-right: 10px;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: capitalize;
  transition: 0.5s;
}
#navbar nav li a:hover {
  color: #377dff;
}
#navbar .active {
  color: #377dff;
}
#navbar .dropdown-menu {
  margin-top: 14px;
  width: auto;
  top: 100%;
  z-index: 300;
  margin-bottom: 24px;
  padding: 8px 0;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.dropdown-item {
  color: rgba(0, 0, 0, 0.8);
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: capitalize;
  transition: 0.5s;
}
.dropdown-item:hover {
  color: #377dff;
}
.dropdown-item:active {
  color: #377dff;
  text-decoration: none;
  background-color: transparent;
}
.shadow {
  --webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
}
</style>
