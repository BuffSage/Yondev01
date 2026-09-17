// Klaro Consent Manager Configuration for YonDev
(function () {
  function getCurrentLang() {
    return localStorage.getItem('yondev-lang') || (navigator.language && navigator.language.startsWith('en') ? 'en' : 'de');
  }

  var currentLang = getCurrentLang();

  window.klaroConfig = {
    version: 1,
    elementID: 'klaro',
    styling: {
      theme: ['light'],
    },
    noModal: false,
    lang: currentLang,
    storageMethod: 'localStorage',
    storageName: 'yondev_klaro_consent',
    htmlTexts: true,
    embedded: false,
    groupByPurpose: true,
    cookieExpiresAfterDays: 180,
    privacyPolicy: 'rechtliches.html#datenschutz',
    default: false,
    mustConsent: false,
    acceptAll: true,
    hideDeclineAll: false,
    hideLearnMore: false,
    noticeAsModal: false,
    translations: {
      zz: {
        privacyPolicyUrl: 'rechtliches.html#datenschutz'
      },
      de: {
        privacyPolicyUrl: 'rechtliches.html#datenschutz',
        consentModal: {
          title: 'Datenschutz-Präferenzen',
          description: 'Wir nutzen Cookies und ähnliche Technologien, um Ihnen ein optimales Web-Erlebnis zu bieten. Einige sind essenziell für die Grundfunktionen der Website, während andere uns helfen, unser Angebot anonym zu analysieren und zu verbessern.',
          privacyPolicy: {
            text: 'Weitere Informationen finden Sie in unserer {privacyPolicy}.',
            name: 'Datenschutzerklärung'
          }
        },
        consentNotice: {
          title: 'Ihre Privatsphäre ist uns wichtig',
          description: 'Wir nutzen Cookies und lokale Speicherung, um Ihnen die beste Nutzererfahrung zu gewährleisten und grundlegende Einstellungen wie Sprache und Anzeigemodus zu sichern.',
          learnMore: 'Einstellungen anpassen',
          testing: 'Testmodus',
          privacyPolicy: {
            name: 'Datenschutzerklärung'
          }
        },
        purposes: {
          functional: {
            title: 'Essenziell & Technisch notwendig',
            description: 'Diese Technologien sind für den grundlegenden Betrieb der Website erforderlich (z. B. Speichern Ihrer Sprache, des Farbschemas und der Cookie-Auswahl).'
          },
          analytics: {
            title: 'Statistiken & Performance',
            description: 'Ermöglicht uns, die Nutzung unserer Website anonym auszuwerten, um Inhalte und Funktionalität stetig zu optimieren.'
          }
        },
        purposeItem: {
          service: 'Dienst',
          services: 'Dienste'
        },
        ok: 'Auswahl speichern',
        save: 'Einstellungen speichern',
        decline: 'Ablehnen',
        acceptAll: 'Alle akzeptieren',
        acceptSelected: 'Auswahl speichern',
        close: 'Schließen',
        service: {
          disableAll: {
            title: 'Alle Dienste aktivieren / deaktivieren',
            description: 'Verwenden Sie diesen Schalter, um alle optionalen Dienste ein- oder auszuschalten.'
          },
          optOut: {
            title: '(Opt-Out)',
            description: 'Dieser Dienst wird standardmäßig geladen (kann aber deaktiviert werden).'
          },
          required: {
            title: '(Erforderlich)',
            description: 'Dieser Dienst ist technisch zwingend erforderlich.'
          },
          purposes: 'Zwecke',
          purpose: 'Zweck'
        }
      },
      en: {
        privacyPolicyUrl: 'rechtliches.html#datenschutz',
        consentModal: {
          title: 'Privacy Preferences',
          description: 'We use cookies and similar technologies to provide an optimal web experience. Some are essential for core site functionality, while others help us anonymously analyze and improve our services.',
          privacyPolicy: {
            text: 'For more information, please check our {privacyPolicy}.',
            name: 'Privacy Policy'
          }
        },
        consentNotice: {
          title: 'We value your privacy',
          description: 'We use cookies and local storage to guarantee the best user experience and remember your preferences such as language and theme mode.',
          learnMore: 'Customize settings',
          testing: 'Test Mode',
          privacyPolicy: {
            name: 'Privacy Policy'
          }
        },
        purposes: {
          functional: {
            title: 'Essential & Strictly Necessary',
            description: 'These items are required to enable core functionality such as remembering your language, color theme, and consent choices.'
          },
          analytics: {
            title: 'Analytics & Performance',
            description: 'Allows us to anonymously measure visitor interactions to continuously optimize website content and performance.'
          }
        },
        purposeItem: {
          service: 'Service',
          services: 'Services'
        },
        ok: 'Save Selection',
        save: 'Save Preferences',
        decline: 'Decline',
        acceptAll: 'Accept All',
        acceptSelected: 'Save Selection',
        close: 'Close',
        service: {
          disableAll: {
            title: 'Enable / Disable all services',
            description: 'Use this switch to toggle all optional services.'
          },
          optOut: {
            title: '(Opt-Out)',
            description: 'This service is enabled by default (can be turned off).'
          },
          required: {
            title: '(Required)',
            description: 'This service is technically required.'
          },
          purposes: 'Purposes',
          purpose: 'Purpose'
        }
      }
    },
    services: [
      {
        name: 'session',
        purposes: ['functional'],
        required: true,
        default: true,
        cookies: ['yondev-lang', 'theme', 'yondev_klaro_consent'],
        translations: {
          de: {
            title: 'Yondev Einstellungen (Sprache & Theme)',
            description: 'Speichert Ihre gewählte Sprache (DE/EN), das Farbschema (Hell/Dunkel) und Ihre Cookie-Zustimmung.'
          },
          en: {
            title: 'Yondev Preferences (Language & Theme)',
            description: 'Remembers your language choice (EN/DE), preferred color theme (Light/Dark), and cookie consent status.'
          }
        }
      },
      {
        name: 'analytics',
        purposes: ['analytics'],
        required: false,
        default: false,
        translations: {
          de: {
            title: 'Anonyme Website-Analyse',
            description: 'Erlaubt anonyme Auswertungen zur kontinuierlichen Verbesserung unserer Seiten und Inhalte.'
          },
          en: {
            title: 'Anonymous Site Analytics',
            description: 'Allows anonymous telemetry to continuously improve our pages and user experience.'
          }
        }
      }
    ]
  };
})();
