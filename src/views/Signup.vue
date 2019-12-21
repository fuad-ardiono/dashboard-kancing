<template>
    <div>
        <b-container>
            <b-row>
                <b-col>
                    <b-card class="m-3">
                    <h1>Form Signup</h1>
                    <b-form v-if="show">
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
                            id="input-group-2"
                            label="Username:"
                            label-for="input-2"
                        >
                            <b-form-input
                            id="input-2"
                            v-model="form.userName"
                            @input="handleUsername"
                            type="text"
                            required
                            placeholder="Enter Username"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group
                            id="input-group-3"
                            label="First Name:"
                            label-for="input-3"
                        >
                            <b-form-input
                            id="input-3"
                            v-model="form.firstName"
                            type="text"
                            required
                            placeholder="Enter First Name"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group
                            id="input-group-4"
                            label="Last Name:"
                            label-for="input-4"
                        >
                            <b-form-input
                            id="input-4"
                            v-model="form.lastName"
                            type="text"
                            required
                            placeholder="Enter Last Name"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-5" label="Password:" label-for="input-5">
                            <b-form-input
                            id="input-5"
                            type="password"
                            v-model="form.password"
                            required
                            ></b-form-input>
                        </b-form-group>
                          <b-button variant="success" @click="onSubmit" class="mr-1">
                            Sign Up
                          </b-button>
                          <b-button variant="danger" @click="onCancel" class="ml-1">
                            Cancel
                          </b-button>
                        </b-form>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
/* eslint-disable prefer-arrow-callback */

import _ from 'lodash';
import { RepositoryFactory } from '../repository/RepositoryFactory';

const AuthRepo = RepositoryFactory.get('auth');

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
  watch: {
    'form.email': function () {
      console.log('watch email');
      console.log(`current value email ${this.form.email}`);
    },
  },
  methods: {
    async onSubmit(e) {
      try {
        e.preventDefault();
        const payload = this.form;
        await AuthRepo.createUser(payload);
        await this.$router.push('/');
      } catch (err) {
        throw new Error(err);
      }
    },
    onCancel() {
      this.$router.push('/');
    },
    handleUsername: _.debounce(function () {
      this.form.userName = _.toLower(this.form.userName);
    }, 200),
    onReset(e) {
      console.log('e', e);
    },
  },
};
</script>
