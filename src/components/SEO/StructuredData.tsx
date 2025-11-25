import React from 'react';
import Script from 'next/script';

interface StructuredDataProps {
  type?: 'organization' | 'educational' | 'localBusiness' | 'course';
  data?: Record<string, unknown>;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type = 'organization', data }) => {
  const getOrganizationSchema = () => ({
    "@type": "EducationalOrganization",
    "@id": "https://www.languagecenter.ro/#organization",
    "name": "Language Center Cluj & Mureș",
    "alternateName": "Language Center",
    "url": "https://www.languagecenter.ro",
    "logo": "https://www.languagecenter.ro/assets/imgs/logo/logo.png",
    "description": "Școală de limbi străine cu două locații în Cluj-Napoca și Târgu Mureș. Centru autorizat pentru examene internaționale Cambridge, IELTS, ÖSD și ECL.",
    "foundingDate": "2008",
    "slogan": "Comunicare fluentă și sigură pentru a-ți atinge scopurile",
    "telephone": ["+40775249850", "+40769049473"],
    "areaServed": [
      {
        "@type": "City",
        "name": "Cluj-Napoca",
        "containedInPlace": {
          "@type": "Country",
          "name": "România"
        }
      },
      {
        "@type": "City",
        "name": "Târgu Mureș",
        "containedInPlace": {
          "@type": "Country",
          "name": "România"
        }
      }
    ],
    "location": [
      {
        "@type": "Place",
        "@id": "https://www.languagecenter.ro/#place-cluj",
        "name": "Language Center Cluj-Napoca",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "str. Carmen Silva 1-3",
          "addressLocality": "Cluj-Napoca",
          "addressRegion": "Cluj",
          "postalCode": "400000",
          "addressCountry": "RO"
        },
        "telephone": "+40775249850",
        "email": "officecluj@languagecenter.ro"
      },
      {
        "@type": "Place",
        "@id": "https://www.languagecenter.ro/#place-mures",
        "name": "Language Center Târgu Mureș",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "str. Dr. Knöpfler Vilmos nr. 2-4",
          "addressLocality": "Târgu Mureș",
          "addressRegion": "Mureș",
          "postalCode": "540000",
          "addressCountry": "RO"
        },
        "telephone": "+40769049473",
        "email": "office@languagecenter.ro"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/profile.php?id=100063656467576",
      "https://www.instagram.com/languageschool_08/",
      "https://www.youtube.com/@Languageschool_08",
      "https://www.tiktok.com/@languageschool08"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cursuri de Limbi Străine",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Cursuri de Limba Engleză",
            "description": "Cursuri de limba engleză pentru toate nivelurile",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Language Center"
            },
            "educationalLevel": ["A1", "A2", "B1", "B2", "C1", "C2"],
            "availableLanguage": "en"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Cursuri de Limba Germană",
            "description": "Cursuri de limba germană cu profesori nativi",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Language Center"
            },
            "educationalLevel": ["A1", "A2", "B1", "B2", "C1", "C2"],
            "availableLanguage": "de"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Cursuri de Limba Spaniolă",
            "description": "Cursuri de limba spaniolă interactive",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Language Center"
            },
            "educationalLevel": ["A1", "A2", "B1", "B2", "C1", "C2"],
            "availableLanguage": "es"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Cursuri de Limba Franceză",
            "description": "Cursuri de limba franceză cu pregătire DELF",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Language Center"
            },
            "educationalLevel": ["A1", "A2", "B1", "B2", "C1", "C2"],
            "availableLanguage": "fr"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Cursuri de Limba Italiană",
            "description": "Cursuri de limba italiană cu accent pe conversație",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Language Center"
            },
            "educationalLevel": ["A1", "A2", "B1", "B2", "C1"],
            "availableLanguage": "it"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Cursuri de Limba Japoneză",
            "description": "Cursuri de limba japoneză cu învățare Hiragana, Katakana și Kanji",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Language Center"
            },
            "educationalLevel": ["N5", "N4", "N3", "N2", "N1"],
            "availableLanguage": "ja"
          }
        }
      ]
    }
  });

  const getLocalBusinessSchema = () => ({
    "@type": "LocalBusiness",
    "@id": "https://www.languagecenter.ro/#localbusiness",
    "name": "Language Center Cluj & Mureș",
    "image": "https://www.languagecenter.ro/assets/imgs/logo/logo.png",
    "url": "https://www.languagecenter.ro",
    "telephone": ["+40775249850", "+40769049473"],
    "email": "office@languagecenter.ro",
    "priceRange": "$$",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "str. Carmen Silva 1-3",
        "addressLocality": "Cluj-Napoca",
        "addressRegion": "Cluj",
        "postalCode": "400000",
        "addressCountry": "RO"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "str. Dr. Knöpfler Vilmos nr. 2-4",
        "addressLocality": "Târgu Mureș",
        "addressRegion": "Mureș",
        "postalCode": "540000",
        "addressCountry": "RO"
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "14:00"
      }
    ],
    "geo": [
      {
        "@type": "GeoCoordinates",
        "latitude": "46.7712",
        "longitude": "23.6236"
      },
      {
        "@type": "GeoCoordinates",
        "latitude": "46.5424",
        "longitude": "24.5574"
      }
    ]
  });

  const getBreadcrumbSchema = () => ({
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Acasă",
        "item": "https://www.languagecenter.ro"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Despre Noi",
        "item": "https://www.languagecenter.ro/about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Cursuri",
        "item": "https://www.languagecenter.ro/courses"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Examene",
        "item": "https://www.languagecenter.ro/exam"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Contact",
        "item": "https://www.languagecenter.ro/contact"
      }
    ]
  });

  const getWebsiteSchema = () => ({
    "@type": "WebSite",
    "@id": "https://www.languagecenter.ro/#website",
    "url": "https://www.languagecenter.ro",
    "name": "Language Center Cluj & Mureș",
    "description": "Școală de limbi străine - Cursuri și examene internaționale",
    "publisher": {
      "@id": "https://www.languagecenter.ro/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.languagecenter.ro/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "ro-RO"
  });

  const getSchema = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@graph": [
            getOrganizationSchema(),
            getLocalBusinessSchema(),
            getWebsiteSchema(),
            getBreadcrumbSchema()
          ]
        };
      case 'localBusiness':
        return {
          "@context": "https://schema.org",
          ...getLocalBusinessSchema()
        };
      case 'educational':
        return {
          "@context": "https://schema.org",
          ...getOrganizationSchema()
        };
      default:
        return {
          "@context": "https://schema.org",
          ...getOrganizationSchema()
        };
    }
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data || getSchema()),
      }}
      strategy="afterInteractive"
    />
  );
};

export default StructuredData;
