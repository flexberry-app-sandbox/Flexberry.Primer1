import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.primer.caption'),
          title: i18n.t('forms.application.sitemap.primer.title'),
          children: [{
            link: 'i-i-s-primer-документ-l',
            caption: i18n.t('forms.application.sitemap.primer.i-i-s-primer-документ-l.caption'),
            title: i18n.t('forms.application.sitemap.primer.i-i-s-primer-документ-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-primer-должность-l',
            caption: i18n.t('forms.application.sitemap.primer.i-i-s-primer-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.primer.i-i-s-primer-должность-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-primer-сотрудник-список',
            caption: i18n.t('forms.application.sitemap.primer.i-i-s-primer-сотрудник-список.caption'),
            title: i18n.t('forms.application.sitemap.primer.i-i-s-primer-сотрудник-список.title'),
            icon: 'phone',
            children: null
          }]
        }
      ]
    };
  }),
})