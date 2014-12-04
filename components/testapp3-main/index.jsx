var require_kdb=[{filename:"testapp3.kdb", url:"http://rawgit.com/yapcheahshen/testapp3/master/testapp3.kdb" , desc:"testapp3"}];
var Main = React.createClass({
  mixins:[Require("defaultmain")],
  dbid:"testapp3",
  defaultTofind:"",
  require_kdb:require_kdb,
});
module.exports=Main;