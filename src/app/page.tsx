import BookingCard from '@/components/BookingCard';

const Home = () => {
  return (
    <main 
      className="min-h-screen flex items-center justify-center p-4" 
      style={{ 
        background: 'radial-gradient(ellipse at center, #E28F11 0%, #D67C0A 50%, #9D5A07 100%)'
      }}
    >
      <BookingCard />
    </main>
  );
};

export default Home;
