export default function InstagramGiveawayApp() {
  const mockParticipants = [
    { user: '@ana', comments: 12 },
    { user: '@joao', comments: 7 },
    { user: '@maria', comments: 15 },
    { user: '@pedro', comments: 5 },
  ]

  const winner = mockParticipants.reduce((a, b) =>
    a.comments > b.comments ? a : b
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-white p-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-pink-600 mb-4">
            Sorteio Instagram
          </h1>
          <p className="text-gray-600 text-lg">
            Descubra automaticamente quem mais comentou na postagem.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-6 mb-8">
          <label className="block text-lg font-semibold mb-3">
            Link da postagem do Instagram
          </label>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="https://instagram.com/p/..."
              className="flex-1 border border-gray-300 rounded-2xl px-4 py-4 outline-none focus:ring-2 focus:ring-pink-400"
            />

            <button className="bg-pink-600 hover:bg-pink-700 transition text-white font-semibold px-8 py-4 rounded-2xl">
              Buscar Comentários
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl shadow-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Participantes
              </h2>

              <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold">
                {mockParticipants.length} participantes
              </span>
            </div>

            <div className="space-y-4">
              {mockParticipants.map((participant, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-2xl p-4 flex items-center justify-between"
                >
                  <div>
                    <p className="font-bold text-lg text-gray-800">
                      {participant.user}
                    </p>

                    <p className="text-gray-500 text-sm">
                      Participando do sorteio
                    </p>
                  </div>

                  <div className="bg-pink-600 text-white px-4 py-2 rounded-xl font-bold">
                    {participant.comments} comentários
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col justify-center items-center text-center">
            <div className="w-28 h-28 rounded-full bg-pink-100 flex items-center justify-center mb-6 text-5xl">
              🏆
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Vencedor
            </h2>

            <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-10 py-6 rounded-3xl shadow-lg mb-6">
              <p className="text-4xl font-extrabold">
                {winner.user}
              </p>

              <p className="mt-2 text-pink-100">
                {winner.comments} comentários válidos
              </p>
            </div>

            <button className="bg-gray-900 hover:bg-black transition text-white px-8 py-4 rounded-2xl font-semibold text-lg">
              Realizar Sorteio
            </button>
          </div>
        </div>

        <div className="mt-10 bg-white rounded-3xl shadow-xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Recursos
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              'Remover comentários duplicados',
              'Detectar quem mais comentou',
              'Exportar participantes',
              'Sorteio automático',
              'Ranking de participantes',
              'Animação de resultado',
            ].map((item, index) => (
              <div
                key={index}
                className="border border-pink-100 bg-pink-50 rounded-2xl p-4 font-medium text-gray-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
