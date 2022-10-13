<template>
  <div class="container">
    <form class="card p-4">
        <h3 class="mb-4">Register</h3>
        <div class="mb-3">
          <label autofocus for="email" class="form-label">Email</label>
          <input type="text" class="form-control" id="email" name="email" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text">Must be a valid email you have access to.</div>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" name="password" aria-describedby="passwordHelp">
          <div id="passwordHelp" class="form-text">Must be between 8 and 255 characters inclusively.</div>
        </div>
        <button type="submit" class="btn btn-primary mb-3 w-100">Submit</button>
        <small>
          <div class="text-center fs-6">
            Already have an accout?
            <NuxtLink href="/login" class="link-secondary">
              Login
            </NuxtLink>
          </div>
        </small>
      </form>
  </div>
</template>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.card {
  width: 90%;
  max-width: 500px;
}
</style>