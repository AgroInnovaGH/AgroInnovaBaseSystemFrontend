<script setup lang="ts"></script>

<template>
  <main class="min-h-screen bg-[#F3F4F6]">
    <div class="login_form mx-auto bg-white">
      <div class="logo">
        <img width="35" src="../../assets/akokomarket.png" alt="" />
      </div>
      <h2 class="font-bold text-[1.5rem] mb-4">Login</h2>
      <div>
        <h3 class="font-medium mb-2">Login to your account</h3>
        <p class="small_text mb-4 text-[#2e2e2e]">
          Thank you for choosing Akoko Market , let's access our the best recommendation for you.
        </p>

        <form action="">
          <input type="email" name="email" placeholder="Enter your email address " />
          <input type="password" name="password" placeholder="Enter your password " />
          <div class="flex justify-between">
            <label for="" class="flex gap-2 items-center small_text">
              <input type="checkbox" />
              Remember Me
            </label>

            <RouterLink to="/" class="small_text text-blue-600">Forgot password?</RouterLink>
          </div>
          <button
            class="bg-green-800 text-white block font-bold w-full my-2 py-2 rounded-[10px] cursor-pointer hover:bg-white hover:text-black hover:outline transition-colors outline-[#2e2e2e50]"
          >
            LOGIN
          </button>

          <p class="text-center text-[.6rem] or_tag">OR</p>

          <button
            class="flex w-full justify-center p-2.5 my-2 outline outline-[#2e2e2e50] cursor-pointer rounded-[10px]"
          >
            <img width="20" src="../../assets/google.svg" alt="" />
          </button>
        </form>
      </div>
      <p class="small_text content-end">
        Don't have an account ?
        <RouterLink class="font-medium" to="/register">Create an account</RouterLink>
      </p>
    </div>
  </main>
</template>

<style scoped>
.small_text {
  font-size: 0.8rem;
}

main {
  display: grid;
  place-content: center;
}

.logo {
  position: absolute;
  left: 45%;
  top: -20px;
}

.login_form {
  width: max(65%, 350px);
  margin-inline: auto;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0 0 0 / 0.1);
  border-radius: 10px;
  padding: 4cqi;
  display: grid;
  grid-template-rows: 1fr auto 1fr;
}

input:not([type='checkbox']) {
  width: 100%;
  height: 3rem;
  margin-bottom: 1rem;
  padding-inline: 0.5rem;
  border-radius: 10px;
}

.or_tag {
  position: relative;

  &::before,
  &::after {
    width: 40%;
    height: 2px;
    background-color: rgba(0 0 0 / 0.1);
    top: 50%;
  }

  &::before {
    left: 0;
  }
  &::after {
    right: 0;
  }
}
</style>
