'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Doacao() {
  const router = useRouter();

  const handleCopyPix30 = async () => {
    const pixLink = "00020126580014BR.GOV.BCB.PIX0136c1ce17cc-6a46-454a-b0f2-99bcf644be6c520400005303986540530.005802BR5925Ana Catharina Norberta Me6009SAO PAULO62140510QnbyWGLnwT6304F238";
    try {
      await navigator.clipboard.writeText(pixLink);
      router.push('/agradecimento');
    } catch (err) {
      console.error('Erro ao copiar o link:', err);
    }
  };

  const handleCopyPix50 = async () => {
    const pixLink = "00020126580014BR.GOV.BCB.PIX0136c1ce17cc-6a46-454a-b0f2-99bcf644be6c520400005303986540550.005802BR5925Ana Catharina Norberta Me6009SAO PAULO621405101iw4HfoVCh63048B0F";
    try {
      await navigator.clipboard.writeText(pixLink);
      router.push('/agradecimento');
    } catch (err) {
      console.error('Erro ao copiar o link:', err);
    }
  };

  const handleCopyPix100 = async () => {
    const pixLink = "00020126580014BR.GOV.BCB.PIX0136c1ce17cc-6a46-454a-b0f2-99bcf644be6c5204000053039865406100.005802BR5925Ana Catharina Norberta Me6009SAO PAULO62140510oT6pBlbPXt6304B0F3";
    try {
      await navigator.clipboard.writeText(pixLink);
      router.push('/agradecimento');
    } catch (err) {
      console.error('Erro ao copiar o link:', err);
    }
  };

  const handleCopyPixLivre = async () => {
    const pixLink = "00020126580014BR.GOV.BCB.PIX0136c1ce17cc-6a46-454a-b0f2-99bcf644be6c5204000053039865802BR5925Ana Catharina Norberta Me6009SAO PAULO621405105VSKHom9GY6304287B";
    try {
      await navigator.clipboard.writeText(pixLink);
      router.push('/agradecimento');
    } catch (err) {
      console.error('Erro ao copiar o link:', err);
    }
  };

  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center bg-white">
      {/* Content */}
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center">
          <div className="relative w-72 h-72 mx-auto mb-4">
            <Image
              src="/monograma2.jpeg"
              alt="Monograma"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-gray-600">Querido convidado, optamos por não ter uma lista de presentes, mas se você quiser nos presentear com uma contribuição, ficaremos muito felizes!</p>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>Clique em &quot;Link Pix&quot; para copiar o código do valor escolhido</p>
            <p className="mt-2">Cole o código no seu aplicativo bancário para realizar a transferência</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {/* Opção 1 */}
          <div className="bg-white/90 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col">
            <div className="text-center flex-1">
              <h3 className="text-xl font-semibold text-gray-900">R$ 30,00</h3>
              <p className="text-gray-600 mt-2">Um grão gigante de café</p>
            </div>
            <button 
              onClick={handleCopyPix30}
              className="mt-4 w-full bg-[#984a46] text-white py-2 px-4 rounded-full hover:bg-[#7a3a36] transition-colors"
            >
              Link Pix
            </button>
          </div>

          <div className="bg-white/90 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col">
            <div className="text-center flex-1">
              <h3 className="text-xl font-semibold text-gray-900">R$ 30,00</h3>
              <p className="text-gray-600 mt-2">10 pacotes de cuscuz de arroz</p>
            </div>
            <button 
              onClick={handleCopyPix30}
              className="mt-4 w-full bg-[#984a46] text-white py-2 px-4 rounded-full hover:bg-[#7a3a36] transition-colors"
            >
              Link Pix
            </button>
          </div>

          <div className="bg-white/90 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col">
            <div className="text-center flex-1">
              <h3 className="text-xl font-semibold text-gray-900">R$ 30,00</h3>
              <p className="text-gray-600 mt-2">Condicionador para o cabelo do noivo</p>
            </div>
            <button 
              onClick={handleCopyPix30}
              className="mt-4 w-full bg-[#984a46] text-white py-2 px-4 rounded-full hover:bg-[#7a3a36] transition-colors"
            >
              Link Pix
            </button>
          </div>

          {/* Opção 2 */}
          <div className="bg-white/90 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col">
            <div className="text-center flex-1">
              <h3 className="text-xl font-semibold text-gray-900">R$ 50,00</h3>
              <p className="text-gray-600 mt-2">Um litro de chopp para a noiva</p>
            </div>
            <button 
              onClick={handleCopyPix50}
              className="mt-4 w-full bg-[#984a46] text-white py-2 px-4 rounded-full hover:bg-[#7a3a36] transition-colors"
            >
              Link Pix
            </button>
          </div>

          <div className="bg-white/90 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col">
            <div className="text-center flex-1">
              <h3 className="text-xl font-semibold text-gray-900">R$ 50,00</h3>
              <p className="text-gray-600 mt-2">Noite de jogos</p>
            </div>
            <button 
              onClick={handleCopyPix50}
              className="mt-4 w-full bg-[#984a46] text-white py-2 px-4 rounded-full hover:bg-[#7a3a36] transition-colors"
            >
              Link Pix
            </button>
          </div>

          {/* Opção 3 */}
          <div className="bg-white/90 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col">
            <div className="text-center flex-1">
              <h3 className="text-xl font-semibold text-gray-900">R$ 100,00</h3>
              <p className="text-gray-600 mt-2">Ajuda com os pedágios da viagem</p>
            </div>
            <button 
              onClick={handleCopyPix100}
              className="mt-4 w-full bg-[#984a46] text-white py-2 px-4 rounded-full hover:bg-[#7a3a36] transition-colors"
            >
              Link Pix
            </button>
          </div>

          <div className="bg-white/90 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col">
            <div className="text-center flex-1">
              <h3 className="text-xl font-semibold text-gray-900">R$ 100,00</h3>
              <p className="text-gray-600 mt-2">Inscrição da São Silvestre</p>
            </div>
            <button 
              onClick={handleCopyPix100}
              className="mt-4 w-full bg-[#984a46] text-white py-2 px-4 rounded-full hover:bg-[#7a3a36] transition-colors"
            >
              Link Pix
            </button>
          </div>

          {/* Opção 4 - Valor Livre */}
          <div className="bg-white/90 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col">
            <div className="text-center flex-1">
              <h3 className="text-xl font-semibold text-gray-900">Valor Livre</h3>
              <p className="text-gray-600 mt-2">Capa da inviabilidade</p>
            </div>
            <button 
              onClick={handleCopyPixLivre}
              className="mt-4 w-full bg-[#984a46] text-white py-2 px-4 rounded-full hover:bg-[#7a3a36] transition-colors"
            >
              Link Pix
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 