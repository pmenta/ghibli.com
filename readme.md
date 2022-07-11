Decisões:

- Favoritos na home
-- Ao invés de criar uma página nova somente para os favoritos, eu decidi usar 
   a própria home, sendo assim só precisaria salvar no meu contexto os id's dos
   filmes favoritos e filtrar de todos os filmes que temos já salvos estaticamente
   na página. Economizei algumas linhas de código e menos uma request para a api

- Usar o context com persistência de dados
-- Decidi criar uma lógica dentro do meu contexto que salva os favoritos no localstorage
   sempre que esse estado muda e sempre que ele é inicializado é feito uma busca no
   localstorage para poder trazer esses favoritos ao contexto. Decidi usar o context
   ao invés do redux para usar o mínimo de libs no projeto.

- Todas as páginas são estáticas
-- Como os dados da api não mudam várias vezes no dia, conseguimos construir as
   páginas apenas uma vez por dia, assim melhorando SEO, performance, e evitando
   fazer várias requests a api para buscar a mesma coisa.
 
- Theming
-- Para facilitar a adição de novas funcionalidades como light theme, mudança de
   estilos, e evitar erros passando cores que não deveriam ser usadas eu criei um
   estilo com todas as cores que são usadas na aplicação e tipar elas dentro da @types
   para melhorar a integração com o typescript
 
- Cores com bom contraste
-- Já fazendo bom uso do theme, depois da aplicação concluída fiz testes de acessibilidade
   usando o lighthouse e consegui perceber que algumas cores não tinham contraste
   suficiente, então usando o seletor de cores que temos no devtools, só precisei
   mudar as cores do meu tema para melhorar essa questão de acessibilidade
  
- MovieInfo e MovieCard serem componentes separados
-- Mesmo sendo bem parecidos, os estilos em mobile, e alguns dados são diferentes,
   para facilitar a criação dos estilos, facilitar os testes e melhorar a legibilidade
   dentro do componente resolvi transforma-los em dois componentes diferentes
  
- Criar um componente somente de estilo como container
  Como toda a aplicação estaria dentro de um container com alguns estilos padrão,
  criei um componente de estilo que podemos usar como styled(Container) e definir
  estilos adicionais sem a criação de outra div na DOM ou se não precisarmos de estilos
  adicionais, podemos só reutilizar esse componente
