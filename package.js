Package.describe({
  name: "vulcan-stepform",
  summary: "A stepped Form component",
  version: '0.0.1',
  git: "https://github.com/Apollinaire/vulcan-stepform"
});

Package.onUse(function (api) {

  api.versionsFrom("1.6.1");

  api.use([

    // vulcan core
    "vulcan:core@1.8.9",

    "vulcan:i18n@1.8.9"
  ]);

  // api.addAssets([
  //
  // ], ['client']);

  // api.addAssets([
  // ], ['server']);


  api.addFiles([
    'lib/StepForm.jsx'
  ], ["client", "server"]);

});
