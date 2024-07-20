import React from "react";

interface Product {
  title: string;
}

const ProductCard: React.FC<Product> = ({ title }) => {
  return (
    <div className="bg-secondary p-4 rounded-lg mx-5 mb-15 p-15 shadow-lg">
      <h2 className="text-xl font-bold text-primary mb-2">{title}</h2>
    </div>
  );
};

const Products: React.FC = () => {
  const cybersecurityProducts: Product[] = [
    { title: "MakeMyScan" },
    { title: "Security Audit Management" },
    { title: "Monal Secure Mail (Monal Mail)" },
    { title: "Information Portal" },
  ];

  const enterpriseProducts: Product[] = [
    { title: "Customer Relation Management (CRM)" },
    { title: "Enterprise Resource Planning (ERP)" },
    { title: "Learning Management System (Monal LMS)" },
    { title: "Enterprise Content Management (Monal ECM)" },
  ];

  const questionnaireApps: Product[] = [
    { title: "Monal Survey" },
    { title: "Quiz App" },
    { title: "Employee Recruitment Manager" },
  ];

  const eCommerces: Product[] = [
    { title: "Bazaar International" },
    { title: "Mero Groceries" },
    { title: "NanuBabu.com" },
  ];

  return (
    <div>
      <div className="border-b-2 border-primary-300 pb-5">
        <h1 className="text-2xl text-center mt-15 font-bold m-5">
          Cybersecurity Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cybersecurityProducts.map((product, index) => (
            <ProductCard key={index} title={product.title} />
          ))}
        </div>
      </div>

      <div className="border-b-2 border-primary-300 pb-5">
        <h1 className="text-2xl text-center font-bold m-5">
          Enterprise Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {enterpriseProducts.map((product, index) => (
            <ProductCard key={index} title={product.title} />
          ))}
        </div>
      </div>

      <div className="border-b-2 border-primary-300 pb-5">
        <h1 className="text-2xl text-center font-bold m-5">
          Questionnaire Apps
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {questionnaireApps.map((product, index) => (
            <ProductCard key={index} title={product.title} />
          ))}
        </div>
      </div>

      <div className="border-b-2 border-primary-300 pb-5">
        <h1 className="text-2xl text-center font-bold  m-5">E-Commerce</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 mb-10 md:grid-cols-3 gap-6">
          {eCommerces.map((product, index) => (
            <ProductCard key={index} title={product.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
