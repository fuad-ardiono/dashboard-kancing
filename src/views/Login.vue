<template>
    <div>
        <b-container>
            <b-row>
                <b-col>
                    <b-card class="m-3">
                    <h1>Form Login</h1>
                    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                        <b-form-group
                            id="input-group-1"
                            label="Email address:"
                            label-for="input-1"
                            description="We'll never share your email with anyone else."
                        >
                            <b-form-input
                            id="input-1"
                            v-model="form.email"
                            type="email"
                            required
                            placeholder="Enter email"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-2" label="Password:" label-for="input-2">
                            <b-form-input
                            id="input-2"
                            type="password"
                            v-model="form.password"
                            required
                            ></b-form-input>
                        </b-form-group>
                        <b-button type="submit" variant="primary">Log in</b-button>
                        <b-button to="/signup" variant="success">Sign Up</b-button>
                        </b-form>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      show: true,
    };
  },
};
</script>
