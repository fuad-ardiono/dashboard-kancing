export default {
  methods: {
    toast(variant, title, body) {
      return new Promise(async (resolve) => {
        let show;
        await this.$bvToast.toast(body, {
          title,
          toaster: 'b-toaster-top-right',
          variant,
          solid: true,
        });

        // eslint-disable-next-line prefer-const
        show = true;

        if (show) {
          resolve();
        }
      });
    },
  },
};
