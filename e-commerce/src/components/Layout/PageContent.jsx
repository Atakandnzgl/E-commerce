function PageContent({ children }) {
    return (
      <main className="min-h-[calc(100vh-128px)] p-4">
        {children}
      </main>
    );
  }
  export default PageContent;