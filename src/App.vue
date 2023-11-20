<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">

        <router-link class="navbar-brand" to="/">API ViaCep</router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Início</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="Via-Cep">Via Cep</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="About">Sobre</router-link>
            </li>

          </ul>
        </div>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>
