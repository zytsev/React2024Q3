import PagintPopup from '../../pagelayout/PagintPopup';
import Container from '../../pagelayout/Container';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <div className="main-container">
        {/* <ListCard /> */}
        {children}
      </div>
      <PagintPopup />
    </Container>
  );
}
