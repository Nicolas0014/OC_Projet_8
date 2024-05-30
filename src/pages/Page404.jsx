import { useNavigate } from 'react-router-dom';

export default function Page404() {
  const navigate = useNavigate();
  return (
    <section className="page404 pt-60 bg-primary-color h-[600px]">
      <div className="text">
        <h1 className="md:text-4xl text-2xl text-center text-white">
          Vous êtes arrivé(e) sur une page qui n'existe pas
        </h1>
        <p className="md:text-xl text-base text-white text-center mt-12 w-2/3 mx-auto">
          Nous sommes désolés de vous avoir égaré(e). Veuillez utiliser les
          liens de navigation pour trouver votre chemin ou retourner à la page
          d'accueil. Nous ferons de notre mieux pour ne plus vous perdre à
          l'avenir.
        </p>
        <button
          type="button"
          onClick={() => navigate('/')}
          className="mt-12 block mx-auto bg-white text-primary-color py-2 px-4 rounded md:text-xl text-base"
        >
          Retour à l'accueil
        </button>
      </div>
    </section>
  );
}
