import Image from "next/image";

export default function Agradecimento() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center bg-white">
      <div className="max-w-2xl w-full space-y-8 text-center">
        <div className="relative w-64 h-64 mx-auto mb-4">
          <Image
            src="/monograma2.jpeg"
            alt="Monograma"
            fill
            className="object-contain"
          />
        </div>
        
        <div className="bg-white/90 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-gray-700 mb-8 tracking-wide subpixel-antialiased">Obrigado pelo Presente!</h1>
          
          <div className="bg-green-50 p-4 rounded-lg mb-8">
            <p className="text-green-800 font-medium subpixel-antialiased text-center">
              O código PIX foi copiado! Agora é só colar no seu aplicativo bancário para fazer a transferência.
            </p>
          </div>

          <p className="text-xl font-medium text-gray-600 mb-8 leading-relaxed subpixel-antialiased text-justify">
            Sua generosidade nos toca profundamente. Estamos muito felizes com seu gesto!
          </p>
          <p className="text-lg font-medium text-gray-500 mb-10 leading-relaxed subpixel-antialiased text-justify">
            Esperamos você no dia <b>27 de abril de 2025</b> para celebrarmos juntos este momento tão especial!
          </p>
        </div>
      </div>
    </div>
  );
} 