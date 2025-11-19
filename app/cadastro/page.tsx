"use client";

import { FormEvent, useState } from "react";

export default function CadastroPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nomeRepPortal, setNomeRepPortal] = useState("");
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      // FUTURO: aqui vamos enviar isso para o backend / banco
      console.log("Cadastro enviado:", {
        nome,
        email,
        senha,
        nomeRepPortal,
        screenshotName: screenshot?.name,
      });
      alert(
        "Cadastro enviado (simulação). Depois ligamos isso na API real e salvamos no banco 😄"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-4">
        <h1 className="mb-2 text-2xl font-bold">Criar conta no Click Fast PRO</h1>
        <p className="mb-6 text-sm text-slate-300">
          Preencha seus dados e o{" "}
          <span className="font-semibold">nome do representante no portal</span> para
          ativar sua licença. Você também pode enviar um print para validação.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
        >
          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-200">
              Nome completo
            </label>
            <input
              type="text"
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-red-500"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-200">E-mail</label>
            <input
              type="email"
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-red-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seuemail@exemplo.com"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-200">Senha</label>
            <input
              type="password"
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-red-500"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Crie uma senha"
            />
          </div>

          {/* Nome do representante no portal */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-200">
              Nome do representante no portal
            </label>
            <input
              type="text"
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-red-500"
              value={nomeRepPortal}
              onChange={(e) => setNomeRepPortal(e.target.value)}
              placeholder="Ex: JUNIO J M DA CUNHA"
            />
            <p className="text-[11px] text-slate-400">
              Digite exatamente como aparece no sistema/portal da empresa.
            </p>
          </div>

          {/* Upload de print */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-200">
              Print da tela do portal (opcional)
            </label>
            <input
              type="file"
              accept="image/*"
              className="w-full text-xs text-slate-300 file:mr-3 file:rounded-md file:border-0 file:bg-red-500 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white hover:file:bg-red-600"
              onChange={(e) =>
                setScreenshot(
                  e.target.files && e.target.files[0] ? e.target.files[0] : null
                )
              }
            />
            <p className="text-[11px] text-slate-400">
              Envie um print mostrando o nome do representante no portal. Isso ajuda a
              validar seu acesso mais rápido.
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full rounded-lg bg-red-500 py-2 text-sm font-semibold text-white hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Enviando..." : "Criar conta"}
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-slate-400">
          Já tem conta?{" "}
          <a href="/login" className="text-red-400 hover:text-red-300">
            Fazer login
          </a>
        </p>
      </main>
    </div>
  );
}
