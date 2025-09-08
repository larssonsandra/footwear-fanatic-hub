import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'product' | 'article';
  productData?: {
    price: string;
    availability: 'InStock' | 'OutOfStock';
    brand: string;
    category: string;
    rating?: number;
    reviewCount?: number;
  };
}

const SEO = ({ 
  title = "FootwearFlow - Premium Footwear Collection",
  description = "Discover premium footwear designed for comfort, style, and performance. Shop our curated collection of sneakers, shoes, and athletic footwear.",
  image = "/hero-shoe.jpg",
  url = window.location.href,
  type = "website",
  productData
}: SEOProps) => {
  const fullTitle = title.includes('FootwearFlow') ? title : `${title} | FootwearFlow`;
  
  const structuredData = productData ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": title.replace(' | FootwearFlow', ''),
    "description": description,
    "image": image,
    "brand": {
      "@type": "Brand",
      "name": productData.brand
    },
    "category": productData.category,
    "offers": {
      "@type": "Offer",
      "price": productData.price.replace('$', ''),
      "priceCurrency": "USD",
      "availability": `https://schema.org/${productData.availability}`
    },
    ...(productData.rating && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": productData.rating,
        "reviewCount": productData.reviewCount || 124
      }
    })
  } : {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FootwearFlow",
    "description": "Premium footwear collection for comfort, style, and performance",
    "url": "https://footwearflow.lovable.app",
    "logo": "https://footwearflow.lovable.app/logo.png",
    "sameAs": [
      "https://twitter.com/footwearflow",
      "https://instagram.com/footwearflow"
    ]
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="FootwearFlow" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://images.unsplash.com" />
      <link rel="dns-prefetch" href="https://images.unsplash.com" />
    </Helmet>
  );
};

export default SEO;