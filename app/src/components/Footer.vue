<template>
  <div id="footer">
    <div class="bg-triangle bg-triangle-light bg-triangle-bottom bg-triangle-left"></div>
    <div class="bg-triangle bg-triangle-light bg-triangle-bottom bg-triangle-right"></div>
    <div class="container">
      <div class="row align-self-center">
        <div class="col-md-auto">
          <!-- Brand -->
          <p>
            <a href="https://www.acodeidea.com" class="footer-brand text-white">Acodeidea</a>
          </p>
        </div>
        <div class="col-md">
          <!-- Social links -->
          <ul class="list-inline social list-unstyled text-md-right">
            <li class="list-inline-item">
              <a href="https://www.facebook.com/acodeidea/" target="_blank">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li class="list-inline-item ml-3">
              <a href="https://www.instagram.com/acodeidea/" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li class="list-inline-item ml-3">
              <a href="https://twitter.com/acodeidea" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="list-inline-item ml-3">
              <a href="https://www.linkedin.com/company/acodeidea" target="_blank">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
#footer {
  position: relative;
  padding: 6rem 0.5rem;
  background-color: #343a40 !important;
}
.footer-brand {
  font-size: 20px;
}
.copyright {
  color: #fff;
  opacity: 0.6;
}
.links a {
  font-size: 16px;
  font-weight: 400 !important;
}
.social a {
  font-size: 20px;
  color: #ffffff;
  text-decoration: none;
  transition: 0.5s ease-in-out;
}
.social a:hover {
  color: #377dff;
}
.bg-triangle-left.bg-triangle-light {
  background-image: url("../assets/img/bg-left-light.svg");
}
.bg-triangle-left {
  background-image: url("../assets/img/bg-left.svg");
}
.bg-triangle-right.bg-triangle-light {
  background-image: url("../assets/img/bg-right-light.svg");
}

.bg-triangle-right {
  background-image: url();
}
.bg-triangle {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-repeat: no-repeat;
  background-position: 0 100%;
  background-size: 100% auto;
}
</style>
