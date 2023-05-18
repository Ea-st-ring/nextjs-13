migrate((db) => {
  const collection = new Collection({
    "id": "q8ahn0t3iskhgoc",
    "created": "2023-05-16 05:10:17.561Z",
    "updated": "2023-05-16 05:10:17.561Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qac2rrdg",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("q8ahn0t3iskhgoc");

  return dao.deleteCollection(collection);
})
