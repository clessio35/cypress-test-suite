import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ServerRestPage from '../pages/serverRestPage';

const serverest = new ServerRestPage();

Given(`que acesso a homePage`, () => {
  serverest.accessHomePage();
});

Given(`realizo o cadastro inicial de adm {string} {string} {string}`, (name, email, password) => {
  serverest.registerUser(name, email, password);
});

Given(`devo ser redirecionado para o dashboard`, () => {
  serverest.validateDashboard();
});

Given(`acessar a página de listagem de usuarios`, () => {
  serverest.accessUserListingPage();
});

Then(`devo validar que o usuario esta presente na lista`, () => {
  serverest.validateUserListingPage();
});

When(`eu faço login com email e senha {string} {string}`, (email, password) => {
  serverest.loginWithEmailAndPassword(email, password);
});

When(`acesso a página de cadastro de produtos`, () => {
  serverest.accessProductRegistrationPage();
});

When(`cadastro um produto com nome preco e descricao`, () => {
  serverest.productRegistration();
});

Then(`devo validar que o produto está presente na lista`, () => {
  serverest.validateProductList();
});

Then(`devo realizar o processo de edicao e exclusao de usuario`, () => {
  serverest.userEditingAndDeletionProcess();
});

Then(`acesso a lista de produto`, () => {
  serverest.accessHome();
  serverest.accessListingProductsPage();
});

Then(`devo realizar o processo de edicao e exclusao de produto`, () => {
  serverest.productEditingAndDeletionProcess();
});
