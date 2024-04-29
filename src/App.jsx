import Button from "./components/Button";
import PageContainer from "./components/PageContainer";

function App() {
  return (
    <section>
      <div className="container">
        <div>
          <PageContainer value={"All Pages"} />
        </div>
        <div className="line-dropdown">
          <div className="line" />
        </div>
        <div className="page-container">
          <PageContainer value={"Page 1"} />
          <PageContainer value={"Page 2"} />
          <PageContainer value={"Page 3"} />
          <PageContainer value={"Page 4"} />
          <PageContainer value={"Page 5"} />
          <PageContainer value={"Page 6"} />
        </div>
        <div className="line-dropdown">
          <div className="line" />
        </div>
        <div className="btn-container">
          <Button />
        </div>
      </div>
    </section>
  );
}

export default App;
