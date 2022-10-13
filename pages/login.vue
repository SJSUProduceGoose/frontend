<template>
  <div class="container">
    <form class="card p-4">
        <h3 class="mb-4">Login</h3>
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input autofocus type="text" class="form-control" id="username" name="username">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" name="password" aria-describedby="password">
        </div>
        <button type="submit" class="btn btn-primary mb-3 w-100">Submit</button>
        <small>
          <div class="text-center">
            New here?
            <NuxtLink href="/register" class="link-secondary">
              Register
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