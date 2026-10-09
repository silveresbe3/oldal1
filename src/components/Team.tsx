const team = [
  {
    name: 'Kovács Péter',
    role: 'Vezérigazgató & Projektmenedzser',
    bio: 'Péter 25 év tapasztalattal a vezetői pozícióban. Ő felelős a stratégiáért és az ügyfél-elégedettségért.',
  },
  {
    name: 'Horváth János',
    role: 'Műszaki Vezető',
    bio: 'János mérnöki végzettséggel és 22 év tapasztalattal a műszaki felügyelet igazi szakértője.',
  },
  {
    name: 'Ková cs Márta',
    role: 'Pénzügyi & Adminisztratív Vezető',
    bio: 'Márta biztosítja az átlátható, felelős üzletmenetet és teljes pénzügyi kontrollt.',
  },
  {
    name: 'Szabó Andor',
    role: 'Biztonság & Minőség Koordinátor',
    bio: 'Andor garantálja, hogy minden projekt megfelel a legmagasabb biztonsági és minőségi szabványoknak.',
  },
  {
    name: 'Molnár László',
    role: 'Ügyfélszolgálat & Értékesítés',
    bio: 'László az első pont az ügyfél-kapcsolatoknak, garantálja a gyors és profin válaszidőt.',
  },
  {
    name: 'Takács Éva',
    role: 'HR & Képzési Vezető',
    bio: 'Éva a csapatunk fejlesztésért felelős, biztosítva az állandó szakmai fejlődést.',
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-slate-50 py-20 md:py-28">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">Csapatunk</span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-blue-900 md:text-5xl">
            Tapasztalt szakemberek
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            Az ügyek mögött emberek vannak. Íme az az elkötelezett csapat, amely garantálja a sikert.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="card bg-white border-t-4 border-t-blue-600 hover:border-t-blue-900 transition-colors"
            >
              <div className="inline-block w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center font-bold text-blue-900">
                {member.name.charAt(0)}
              </div>
              <h3 className="mt-4 text-lg font-bold text-blue-900">{member.name}</h3>
              <p className="text-sm font-semibold text-blue-600">{member.role}</p>
              <p className="mt-3 text-sm leading-6 text-slate-700">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
