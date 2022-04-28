import Home from "./views/home/Home";
import { QueryClient, QueryClientProvider } from "react-query";

// To use 'React Query' library
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
