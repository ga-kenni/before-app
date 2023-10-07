import WheelOfFortune from "./WheelOfFortune";

export default function page() {
    const names = ['Kenni', 'Faith', 'Joel', 'Mariyam']

    return <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Spin the wheel!</h1>
        <WheelOfFortune items={names}></WheelOfFortune>
      </main>
  }