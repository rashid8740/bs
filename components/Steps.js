import React from "react";
import Image from "next/image";

const Steps = () => {
  const steps = [
    { image: "/drug-qr-code.png", title: "1. Drug QR code" },
    { image: "/scan-qr-code.png", title: "2. Scan the QR code" },
    { image: "/drug-message.png", title: "3. Message about the scanned drug" },
  ];

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full aspect-square relative mb-4 max-w-xs">
                <Image
                  src={step.image}
                  alt={step.title}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
              <p className="text-lg font-medium text-gray-900 text-center">
                {step.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
