import Error from '../components/Error';

export default function NotFound401() {
  return (
    <Error
      code="401"
      title="Unauthorized"
      message="You’re not authorized to access this page."
      imageSrc="/img/error.png"
      buttonText="← Back To Home"
      buttonLink="/"
    />
  );
}
