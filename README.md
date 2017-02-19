> API
  # Collection
  - create returns a new or existing sublevel instance
  - remove deletes whole instance
  # Documents
  - creates a new key (key being timeuuid) value pair value being the whole JSON document
  - remove/update/delete by id (update is always fetch and write / or can be configured to be ovveriden)
  # Inverted index?
  - For searching with other keys (optional with keys to be indexed specified beforehand)
  - Uses a different instance for each collection with value -> timeuuid pairs can be implemented with level hooks
