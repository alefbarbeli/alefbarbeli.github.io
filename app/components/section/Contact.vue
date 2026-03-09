<template>
  <div class="section contacts">
    <div class="content">
      <div class="title">
        <div class="title_inner">{{ $t('contact.title') }}</div>
      </div>
      <div class="service-items">
        <div class="service-item">
          <div class="icon"><Icon class="ion" name="lucide:phone" size="30" /></div>
          <div class="name">{{ $t('contact.phoneLabel') }}</div>
          <p>
            +55 (11)94426-4284
          </p>
        </div>
        <div class="service-item">
          <div class="icon"><Icon class="ion" name="lucide:mail" size="30" /></div>
          <div class="name">{{ $t('contact.emailLabel') }}</div>
          <p>
            <a href="mailto:alefbarbeli@gmail.com">alefbarbeli@gmail.com</a>
          </p>
        </div>
      </div>

      <div class="contact_form">
        <form id="contact-form" @submit.prevent="submitContact">
          <div class="group-val">
            <input
              v-model.trim="form.name"
              type="text"
              name="name"
              :placeholder="$t('contact.form.namePlaceholder')"
              :disabled="isSubmitting"
            >
          </div>
          <div class="group-val">
            <input
              v-model.trim="form.email"
              type="email"
              name="email"
              :placeholder="$t('contact.form.emailPlaceholder')"
              :disabled="isSubmitting"
            >
          </div>
          <div class="group-val ct-gr">
            <textarea
              v-model.trim="form.message"
              name="message"
              :placeholder="$t('contact.form.messagePlaceholder')"
              :disabled="isSubmitting"
            ></textarea>
          </div>
          <button
            class="btn fill"
            type="submit"
            :disabled="isSubmitting"
            :data-text="isSubmitting ? $t('contact.form.sending') : $t('contact.form.submit')"
          >
            {{ isSubmitting ? $t('contact.form.sending') : $t('contact.form.submit') }}
          </button>
        </form>

        <div v-if="submitStatus === 'success'" class="alert-success" style="display:block">
          <p>
            {{ $t('contact.form.success') }}
          </p>
        </div>

        <div v-if="submitStatus === 'error'" class="alert-success" style="display:block">
          <p>
            {{ submitError || $t('contact.form.error') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale, t } = useI18n();
const runtimeConfig = useRuntimeConfig();
const companyId = runtimeConfig.public.klaviyo?.companyId || '';

const form = reactive({
  name: '',
  email: '',
  message: ''
});

const isSubmitting = ref(false);
const submitStatus = ref<'idle' | 'success' | 'error'>('idle');
const submitError = ref('');

if (companyId) {
  useHead({
    script: [
      {
        src: `https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=${companyId}`,
        async: true
      }
    ]
  });
}

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const submitContact = async () => {
  submitStatus.value = 'idle';
  submitError.value = '';

  if (!form.name || !form.email || !form.message) {
    submitStatus.value = 'error';
    submitError.value = t('contact.form.validationRequired');
    return;
  }

  if (!isValidEmail(form.email)) {
    submitStatus.value = 'error';
    submitError.value = t('contact.form.validationEmail');
    return;
  }

  if (!companyId) {
    submitStatus.value = 'error';
    submitError.value = t('contact.form.klaviyoMissingConfig');
    return;
  }

  isSubmitting.value = true;

  try {
    const learnq = ((window as any)._learnq = (window as any)._learnq || []);

    learnq.push([
      'identify',
      {
        $email: form.email,
        $first_name: form.name,
        locale: locale.value,
        source: 'portfolio-contact-form'
      }
    ]);

    learnq.push([
      'track',
      'Contact Form Submitted',
      {
        name: form.name,
        email: form.email,
        message: form.message,
        locale: locale.value,
        page_path: window.location.pathname
      }
    ]);

    submitStatus.value = 'success';
    form.name = '';
    form.email = '';
    form.message = '';
  } catch {
    submitStatus.value = 'error';
    submitError.value = t('contact.form.error');
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.btn.fill {
  margin: 0;
}
</style>
