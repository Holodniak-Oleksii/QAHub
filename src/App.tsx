import { QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";
import AppRouter from "./router";
import Theme from "./theme";
import { queryClient } from "./api";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Theme>
        <SnackbarProvider maxSnack={3} autoHideDuration={5000}>
          <AppRouter />
        </SnackbarProvider>
      </Theme>
    </QueryClientProvider>
  );
};

export default App;
