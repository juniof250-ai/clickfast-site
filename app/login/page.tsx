"use client";

import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      // FUTURO: aqui vamos chamar a API do backend no Render:
      // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`, { ... })

      console.log("Login enviado:", { email, senha });
      alert("Login enviado (simulação). Depois ligamos na API real 😄");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-4">
        <h1 className="mb-2 text-2xl font-bold">Entrar no Click Fast PRO</h1>
        <p className="mb-6 text-sm text-slate-300">
          Use o e-mail e senha cadastrados para acessar o painel e fazer download da automação.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
        >
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
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full rounded-lg bg-red-500 py-2 text-sm font-semibold text-white hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-slate-400">
          Ainda não tem conta?{" "}
          <a href="/cadastro" className="text-red-400 hover:text-red-300">
            Criar cadastro
          </a>
        </p>
      </main>
    </div>
  );
}
