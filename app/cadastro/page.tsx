"use client";

import React, {
  FormEvent,
  ChangeEvent,
  useState,
} from "react";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://clickfast-backend.onrender.com";

export default function CadastroPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nomeRepPortal, setNomeRepPortal] = useState("");
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] || null;
    setScreenshot(file);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!nome || !email || !senha || !nomeRepPortal) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("nome", nome);
      formData.append("email", email);
      formData.append("senha", senha);
      formData.append("nomeRepresentante", nomeRepPortal);

      if (screenshot) {
        formData.append("screenshot", screenshot);
      }

      const res = await fetch(`${API_BASE_URL}/api/register`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        let msg = "Erro ao enviar cadastro.";
        try {
          const err = await res.json();
          if (err?.detail) msg = err.detail;
          if (err?.error) msg = err.error;
        } catch {
          // ignora erro ao ler json
        }
        alert(msg);
        return;
      }

      const data = await res.json();
      console.log("Cadastro OK:", data);
      alert("Cadastro realizado com sucesso!");

      setNome("");
      setEmail("");
      setSenha("");
      setNomeRepPortal("");
      setScreenshot(null);
    } catch (error) {
      console.error("Erro ao conectar:", error);
      alert("Erro ao conectar com o servidor. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#050509] text-white px-4">
      <div className="w-full max-w-md bg-[#0b0b15] border border-[#222] rounded-xl p-8 shadow-lg">
        <h1 className="text-2xl font-semibold mb-2">
          Criar conta no Click Fast PRO
        </h1>
        <p className="text-sm text-gray-400 mb-6">
          Preencha seus dados e o nome do representante no portal
          para ativar sua licença de teste de 7 dias. Você também
          pode enviar um print para validação.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Nome completo</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full rounded-md bg-[#111321] border border-[#333] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Seu nome completo"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md bg-[#111321] border border-[#333] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="seuemail@exemplo.com"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Senha</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full rounded-md bg-[#111321] border border-[#333] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Digite uma senha segura"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">
              Nome do representante no portal
            </label>
            <input
              type="text"
              value={nomeRepPortal}
              onChange={(e) => setNomeRepPortal(e.target.value)}
              className="w-full rounded-md bg-[#111321] border border-[#333] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Digite exatamente como aparece no portal"
            />
            <p className="text-xs text-gray-500 mt-1">
              Digite exatamente como aparece no sistema/portal da empresa.
            </p>
          </div>

          <div>
            <label className="block text-sm mb-1">
              Print da tela do portal (opcional)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full text-sm text-gray-300"
            />
            <p className="text-xs text-gray-500 mt-1">
              Envie um print mostrando o nome do representante no portal.
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full mt-4 rounded-md px-4 py-2 text-sm font-semibold
              ${
                loading
                  ? "bg-red-900 cursor-not-allowed"
                  : "bg-red-600 hover:bg-red-700 cursor-pointer"
              } transition`}
          >
            {loading ? "Enviando..." : "Criar conta"}
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-gray-400">
          Já tem conta?{" "}
          <a href="/login" className="text-red-400 hover:underline">
            Fazer login
          </a>
        </p>
      </div>
    </main>
  );
}
