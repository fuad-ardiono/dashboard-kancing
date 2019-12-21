<template>
    <div>
        <b-container>
            <b-row>
                <b-col>
                    <b-card class="m-3">
                    <h1>Form Signup</h1>
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

                        <b-form-group
                            id="input-group-1"
                            label="Username:"
                            label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            v-model="form.userName"
                            type="text"
                            required
                            placeholder="Enter Username"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group
                            id="input-group-1"
                            label="First Name:"
                            label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            v-model="form.firstName"
                            type="text"
                            required
                            placeholder="Enter First Name"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group
                            id="input-group-1"
                            label="Last Name:"
                            label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            v-model="form.lastName"
                            type="text"
                            required
                            placeholder="Enter Last Name"
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
                        <b-button to="/signup" variant="success">Sign Up</b-button>
                        <b-button to="/" variant="danger">Cancel</b-button>
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
        userName: '',
        password: '',
        firstName: '',
        lastName: '',
      },
      show: true,
    };
  },
};
</script>
