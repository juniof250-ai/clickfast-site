"use client";

import { useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [selectedPlan, setSelectedPlan] = useState<
    "mensal" | "trimestral" | "anual"
  >("anual");
  const [mobileOpen, setMobileOpen] = useState(false);

  const baseCard =
    "flex flex-col rounded-2xl bg-slate-900/70 p-6 cursor-pointer transition border";

  const buttonSelected =
    "mt-6 rounded-xl bg-red-500 py-2 text-sm font-semibold text-white hover:bg-red-600";
  const buttonDefault =
    "mt-6 rounded-xl bg-slate-800 py-2 text-sm font-semibold hover:bg-slate-700";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* NAVBAR */}
      <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-0">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-500/90 text-xl">
              ⚡
            </div>
            <span className="text-lg font-semibold tracking-wide">
              CLICK FAST PRO
            </span>
          </div>

          {/* Menu desktop */}
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
            <a href="#como-funciona" className="hover:text-white">
              Como funciona
            </a>
            <a href="#suporte" className="hover:text-white">
              Suporte
            </a>
            <Link
              href="/cadastro"
              className="rounded-full border border-slate-600 px-4 py-1.5 text-xs hover:border-slate-300"
            >
              Cadastro
            </Link>
            <Link
              href="/login"
              className="rounded-full bg-red-500 px-4 py-1.5 text-xs font-semibold text-white hover:bg-red-600"
            >
              Login
            </Link>
          </nav>

          {/* Botão mobile */}
          <button
            className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-3 py-1 text-sm text-slate-200 hover:border-slate-400 md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? "Fechar" : "Menu"}
          </button>
        </div>

        {/* Menu mobile aberto */}
        {mobileOpen && (
          <nav className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-slate-800 px-4 pb-3 pt-2 text-sm font-medium text-slate-200 md:hidden">
            <a
              href="#como-funciona"
              className="rounded-lg px-2 py-1 hover:bg-slate-800"
              onClick={() => setMobileOpen(false)}
            >
              Como funciona
            </a>
            <a
              href="#suporte"
              className="rounded-lg px-2 py-1 hover:bg-slate-800"
              onClick={() => setMobileOpen(false)}
            >
              Suporte
            </a>
            <Link
              href="/cadastro"
              className="rounded-lg px-2 py-1 hover:bg-slate-800"
              onClick={() => setMobileOpen(false)}
            >
              Cadastro
            </Link>
            <Link
              href="/login"
              className="rounded-lg px-2 py-1 text-red-300 hover:bg-slate-800"
              onClick={() => setMobileOpen(false)}
            >
              Login
            </Link>
          </nav>
        )}
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 lg:px-0">
        {/* HERO */}
        <section className="grid gap-10 pb-16 md:grid-cols-[1.4fr,1fr] md:items-center">
          <div>
            <p className="mb-2 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs text-slate-300">
              <span className="text-red-400">⚡</span> Automação para representantes
              comerciais
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              Automatize seus pedidos em poucos cliques
            </h1>
            <p className="mt-4 max-w-xl text-sm text-slate-300 md:text-base">
              O Click Fast PRO preenche pedidos para você no portal da empresa.
              Menos tempo digitando, mais tempo vendendo.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#planos"
                className="rounded-xl bg-red-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-600"
              >
                Ver planos
              </a>
              <a
                href="#como-funciona"
                className="rounded-xl border border-slate-700 px-5 py-2.5 text-sm text-slate-100 hover:border-slate-400"
              >
                Ver como funciona
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-400">
              Compatível com Windows. Suporte direto com o desenvolvedor.
            </p>
          </div>

          {/* Caixinha de destaque */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-sm text-slate-200">
            <h2 className="mb-2 text-base font-semibold">
              Por que usar o Click Fast PRO?
            </h2>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>• Digitação automática de códigos, quantidades e preços.</li>
              <li>• Redução de erros de digitação e retrabalho.</li>
              <li>• Log de tudo que foi enviado para conferência.</li>
              <li>• Licença por usuário, com controle de acesso.</li>
            </ul>
          </div>
        </section>

        {/* PLANOS */}
        <section id="planos" className="pb-16">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold md:text-3xl">
              Escolha o plano ideal para você
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Licença por usuário. Você escolhe se quer pagar mês a mês ou aproveitar os descontos.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Mensal */}
            <div
              onClick={() => setSelectedPlan("mensal")}
              className={
                baseCard +
                (selectedPlan === "mensal"
                  ? " border-red-500 shadow-lg shadow-red-900/40"
                  : " border-slate-800")
              }
            >
              <h3 className="text-lg font-semibold">Mensal</h3>
              <p className="mt-1 text-xs text-slate-300">1 usuário</p>
              <p className="mt-1 text-xs text-slate-400">Windows</p>

              <div className="mt-6">
                <p className="text-xs text-slate-400">Plano mensal padrão</p>
                <p className="text-3xl font-bold">R$ 650,00</p>
                <p className="text-xs text-slate-400">/ mês por usuário</p>
              </div>

              <button
                type="button"
                className={selectedPlan === "mensal" ? buttonSelected : buttonDefault}
              >
                Escolher plano mensal
              </button>

              <ul className="mt-6 space-y-1.5 text-xs text-slate-300">
                <li>✔ Automação de pedidos completa</li>
                <li>✔ Cobrança recorrente mensal</li>
                <li>✔ Suporte via fórum</li>
                <li>✔ Ideal para testar o sistema</li>
              </ul>
            </div>

            {/* Anual – melhor oferta */}
            <div
              onClick={() => setSelectedPlan("anual")}
              className={
                baseCard +
                " relative bg-slate-900" +
                (selectedPlan === "anual"
                  ? " border-red-500 shadow-xl shadow-red-900/40"
                  : " border-slate-800")
              }
            >
              {/* Selo topo */}
              <div className="absolute inset-x-0 -top-4 flex justify-center">
                <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-slate-900 shadow">
                  Melhor oferta!
                </span>
              </div>

              <h3 className="mt-2 text-lg font-semibold">Anual</h3>
              <p className="mt-1 text-xs text-slate-300">1 usuário</p>
              <p className="mt-1 text-xs text-slate-400">Windows</p>

              <div className="mt-6 space-y-1">
                <p className="text-xs text-slate-400">A partir de</p>
                <p className="text-3xl font-bold text-white">R$ 550,00</p>
                <p className="text-xs text-slate-400">/ mês (assinatura de 12 meses)</p>
              </div>

              <div className="mt-4 space-y-1 text-xs text-slate-300">
                <p>
                  • <strong>R$ 6.600,00</strong> em até 12x no cartão —{" "}
                  <span className="text-emerald-300">
                    R$ 1.200,00 de desconto comparado ao mensal
                  </span>
                  .
                </p>
                <p>
                  • <strong>R$ 6.000,00</strong> em até 4x no cartão —{" "}
                  <span className="text-emerald-300">
                    R$ 1.800,00 de desconto comparado ao plano mensal
                  </span>
                  .
                </p>
              </div>

              <button
                type="button"
                className={selectedPlan === "anual" ? buttonSelected : buttonDefault}
              >
                Escolher plano anual
              </button>

              <ul className="mt-6 space-y-1.5 text-xs text-slate-200">
                <li>✔ Maior desconto no ano</li>
                <li>✔ Prioridade no suporte</li>
                <li>✔ Atualizações antecipadas</li>
                <li>✔ Melhor custo-benefício para quem usa todo mês</li>
              </ul>
            </div>

            {/* Trimestral */}
            <div
              onClick={() => setSelectedPlan("trimestral")}
              className={
                baseCard +
                (selectedPlan === "trimestral"
                  ? " border-red-500 shadow-lg shadow-red-900/40"
                  : " border-slate-800")
              }
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Trimestral</h3>
                <span className="rounded-full bg-purple-500/20 px-2 py-0.5 text-[11px] font-semibold text-purple-200">
                  Desconto especial
                </span>
              </div>

              <p className="mt-1 text-xs text-slate-300">1 usuário</p>
              <p className="mt-1 text-xs text-slate-400">Windows</p>

              <div className="mt-6">
                <p className="text-xs text-slate-400">Assinatura trimestral</p>
                <p className="text-3xl font-bold">R$ 600,00</p>
                <p className="text-xs text-slate-400">/ mês por usuário</p>

                <p className="mt-3 text-xs text-slate-300">
                  ou <strong>R$ 1.700,00</strong> em pagamento único —{" "}
                  <span className="text-emerald-300">
                    desconto de R$ 250,00 comparado ao mensal
                  </span>
                  .
                </p>
              </div>

              <button
                type="button"
                className={selectedPlan === "trimestral" ? buttonSelected : buttonDefault}
              >
                Escolher plano trimestral
              </button>

              <ul className="mt-6 space-y-1.5 text-xs text-slate-300">
                <li>✔ Tudo do plano Mensal</li>
                <li>✔ Renovação a cada 3 meses</li>
                <li>✔ Opção de pagamento único com desconto</li>
              </ul>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section id="como-funciona" className="pb-16">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">Como funciona</h2>
          <p className="mb-6 max-w-2xl text-sm text-slate-300">
            Em poucos passos você baixa, instala e já começa a automatizar seus pedidos.
          </p>

          <ol className="space-y-4 text-sm">
            <li className="flex gap-3">
              <span className="mt-0.5 h-6 w-6 rounded-full bg-red-500 text-center text-xs font-bold leading-6">
                1
              </span>
              <div>
                <h3 className="font-semibold">Download e cadastro</h3>
                <p className="text-slate-300">
                  Crie seu cadastro no site, escolha o plano e baixe o instalador do
                  Click Fast PRO.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 h-6 w-6 rounded-full bg-red-500 text-center text-xs font-bold leading-6">
                2
              </span>
              <div>
                <h3 className="font-semibold">Instalação no Windows</h3>
                <p className="text-slate-300">
                  Execute o instalador, faça login com seu usuário e deixe o Chrome
                  preparado como o sistema orienta.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 h-6 w-6 rounded-full bg-red-500 text-center text-xs font-bold leading-6">
                3
              </span>
              <div>
                <h3 className="font-semibold">Importe sua planilha</h3>
                <p className="text-slate-300">
                  Carregue a planilha com códigos, quantidades e preços. O Click Fast PRO
                  valida os dados antes de começar.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 h-6 w-6 rounded-full bg-red-500 text-center text-xs font-bold leading-6">
                4
              </span>
              <div>
                <h3 className="font-semibold">Clique em "Fast Start"</h3>
                <p className="text-slate-300">
                  A automação preenche o portal da empresa para você, linha a linha,
                  enquanto você acompanha o log em tempo real.
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* SUPORTE / FÓRUM */}
        <section id="suporte" className="pb-16">
          <div className="mb-4 flex items-center justify-between gap-2">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Suporte & comunidade</h2>
              <p className="mt-2 text-sm text-slate-300">
                Tire dúvidas, reporte problemas e compartilhe dicas com outros usuários.
              </p>
            </div>
            <a
              href="#"
              className="hidden rounded-xl border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-100 hover:border-slate-400 md:inline-block"
            >
              Acessar fórum
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-xs">
              <p className="text-[11px] uppercase tracking-wide text-slate-400">
                Tópico em destaque
              </p>
              <h3 className="mt-2 text-sm font-semibold">
                Como configurar o Chrome para o Click Fast PRO
              </h3>
              <p className="mt-2 text-slate-300">
                Passo a passo de como criar o atalho com porta de depuração e garantir
                que a automação conecte certinho.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-xs">
              <p className="text-[11px] uppercase tracking-wide text-slate-400">
                Dúvidas frequentes
              </p>
              <ul className="mt-2 space-y-1.5 text-slate-300">
                <li>• Como trocar de máquina sem perder a licença</li>
                <li>• O que fazer se o portal mudar de layout</li>
                <li>• Como interpretar o log da automação</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-xs">
              <p className="text-[11px] uppercase tracking-wide text-slate-400">
                Fale com o suporte
              </p>
              <p className="mt-2 text-slate-300">
                Não achou sua resposta no fórum? Abra um ticket com print e descrição do
                problema que a equipe responde pra você.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-10 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Click Fast PRO. Todos os direitos reservados.
        </footer>
      </main>
    </div>
  );
}
