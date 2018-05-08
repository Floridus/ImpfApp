/**
 * Adds an array of items to our current store
 *
 * @param {string} queryKey a unique key used to identify this query
 * @param {Store} state current store state
 * @param {object[]} itemArr the array of items to add
 * @param {string} primaryKey the primary key used to identify an item (default: id)
 *
 * @return {{}}
 */
export function addItemArrToStore(queryKey, state, itemArr, primaryKey = 'id') {
    // copy queryObject without reference and add this query key
    const queryObj = { ...state.queries };
    queryObj[queryKey] = itemArr;

    // add items ot all entries
    setItemInAllEntries(state, itemArr, primaryKey);

    // now add the item to allEntries array
    return {
      ...state,
      queries: queryObj,
    };
}

/**
 * Adds an array of entries to allEntries store object
 *
 * @param {Store} state current store state
 * @param {object[]} itemArr the array of items to add
 * @param {string} primaryKey the primary key used to identify an item (default: id)
 */
export function setItemInAllEntries(state, itemArr, primaryKey = 'id') {
  for(const item of itemArr) {
    state.allEntries[item[primaryKey]] = item;
  }
}

/**
 * Adds an array of items to our current store
 *
 * @param {string} queryKey a unique key used to identify this query
 * @param {Store} state current store state
 * @param {object[]} newMetadata object with new metadata
 *
 * @return {{}}
 */
export function setQueryMetadata(queryKey, state, newMetadata) {
    // copy metaDataObject without reference and add this query key
    const metadataObj = { ...state.metadata };
    metadataObj[queryKey] = {
      ...metadataObj[queryKey],
      ...newMetadata,
    };

    // add the new metadataObj to state
    state.metadata = metadataObj;
}