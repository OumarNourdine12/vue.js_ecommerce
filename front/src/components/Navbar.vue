<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#"> La Passion du Foot </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>
         <b-nav-item href="#">Catalog</b-nav-item>
          <b-nav-item href="#"> Contact</b-nav-item>
          <b-nav-item href="#"> About</b-nav-item>

       
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          
          
        </b-nav-form>

       

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>Users</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>




<script>
export default {
    
}
</script>