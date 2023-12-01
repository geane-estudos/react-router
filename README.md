<div align="center">

# REACT ROUTER
</div>


## Índice
- [1. React Router Dom](#1-react-router-dom)
- [2. BrowserRouter, Routes e Route](#2-browserrouter-routes-e-route)
- [3. Link](#3-link)
- [3.1. NavLink](#31-navlink)
- [3.2. useNavigate](#32-usenavigate)
- [4. Rota Dinâmica](#4-rota-dinâmica)
- [4.1. useParams](#41-useparams)
- [4.2. useLocation](#42-uselocation)
- [5. useLocation](#42-uselocation)

### 1. React Router Dom
É uma extensão que permite gerenciarmos as rotas do React.

https://reactrouter.com/

npm install react-router-dom

### 2. BrowserRouter, Routes e Route
O **BrowserRouter** deve ser o componente pai que envolve tudo que depender do react-router. O **Routes** define a área em que vamos colocar os nossos **Route**. O **Route** recebe um caminho em path, se esse caminho for o mesmo do URL ele irá renderizar o component que estiver dentro de **element={}**.

### 3. Link
O **Link** irá modificar a rota e renderizar o novo componente sem recarregar a página.
### 3.1 NavLink
O **NavLink** funciona da mesma forma, mas adiciona uma classe ao link que estiver ativo. É necessário colocar o end no NavLink responsável por navegar para a raiz do app.
### 3.2 useNavigate
O hook useNavigate permite navegarmos programaticamente entre as rotas. Por exemplo, pode ser utilizado quando o usuário faz um login bem sucedido e enviamos o mesmo a página da sua conta.

### 4. Rota Dinâmica
O uso de **:nome** irá definir uma rota dinâmica, onde o **nome** poderá ser utilizado como uma variável dentro do componente. Serve para buscarmos rotas dinâmicas como **produto/notebook** ou **produto/smartphone**.
### 4.1 useParams
O hook **useParams** terá um objeto com todos os parâmetros da rota. É possível ter mais de um parâmetro.
### 4.2 useLocation
Retorna o objeto location, com diversas informações sobre a rota atual, como o caminho, parâmetros de busca e mais.

### 5. Nested Routes
Utilizamos nested routes quando precisamos de rotas dentro de rotas. Como por exemplo: perfil/editar e perfil/certificados e etc. Utilizamos o \* para definir que existem outras rotas dentro.
### 5.1 Outlet
Outra forma é definindo todos as rotas diretamente no App e utilizar o component Outlet para mostrarmos a rota.
