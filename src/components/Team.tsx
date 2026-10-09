const team = [
  {
    name: 'Oroszi Péter',
    role: 'Vezérigazgató & Projektmenedzser',
    bio: 'Péter 20 éves tapasztalattal rendelkezik az építőiparban. Ő felel a projekt stratégiáért és az ügyfél-elégedettségért.',
    emoji: '👨‍💼',
  },
  {
    name: 'Horváth János',
    role: 'Műszaki Vezető',
    bio: 'János mérnöki végzettséggel rendelkezik és a műszaki felügyelet minden aspektusát vezeti. 18 év tapasztalat.',
    emoji: '👨‍🔧',
  },
  {
    name: 'Kovács Márta',
    role: 'Pénzügyi & Adminisztratív Vezető',
    bio: 'Márta a könyvelés, számlázás és adminisztrációs feladatok szakértője. Biztosítja az átlátható és felelős üzletmenetet.',
    emoji: '👩‍💼',
  },
  {
    name: 'Szabó Andor',
    role: 'Biztonság & Minőség Koordinátor',
    bio: 'Andor felelős a munkavédelmi protokollok és minőségbiztosítás koordinálásáért minden projekten.',
    emoji: '👨‍💻',
  },
  {
    name: 'Molnár László',
    role: 'Ügyfélszolgálat & Értékesítés',
    bio: 'László az első pont az ügyfél-kapcsolatoknak. Garantálja a gyors válaszidőt és professzionális kommunikációt.',
    emoji: '👨‍💼',
  },
  {
    name: 'Takács Éva',
    role: 'HR & Képzési Vezető',
    bio: 'Éva gondoskodik a csapat fejlesztéséről, képzéséről és a munkahelyi kultúra javításáról.',
    emoji: '👩‍🏫',
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-slate-50 py-20 md:py-28">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-amber-700">Csapatunk</span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
            Tapasztalt szakemberek
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Az ügyek mögött emberek vannak. Íme az az elkötelezett csapat, amely garantálja a sikert.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="card bg-white">
              <div className="text-5xl mb-4">{member.emoji}</div>
              <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
              <p className="text-sm font-semibold text-amber-700">{member.role}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
