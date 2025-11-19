export default function PainelPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <main className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-2xl font-bold">Painel do usuário</h1>
        <p className="mt-2 text-sm text-slate-300">
          Bem-vindo ao Click Fast PRO! Aqui no futuro você vai ter:
        </p>

        <ul className="mt-4 space-y-2 text-sm text-slate-300">
          <li>• Link para download do instalador</li>
          <li>• Status da sua licença de teste (7 dias)</li>
          <li>• Histórico de versões da automação</li>
        </ul>

        <p className="mt-6 text-xs text-slate-500">
          Versão demo para apresentação. A integração completa com o executável e controle
          de licenças virá na próxima etapa.
        </p>
      </main>
    </div>
  );
}
