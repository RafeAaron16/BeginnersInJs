/* API Introduction
 A service that fetches data from one location and transports it to a given destination

 Object that modifies data from one form to another ie

 Name -> Student details
 Age -> Number of students above that age
 Amount -> Possible goods that can be bought with that amount of money.

 API statement -> 16 years
 
 API output
    Micheal - 17
    John - 17
    Mike - 21

    For Example
    Real Life Scenario    
    Imagine someone asked you to get all the items in a shop that are less than 50k.

        Steps:
            Check all items in the shop
            Mark all items less that 50k
            Collect all items less that 50k

    Computer code
        getAllItems API endpoint

        parameter
            Amount
            Comparison(< , =, >, >=, <=)

        server side
            for all items:
                if item.price > amount:
                    mark_item

            For all marked items:
                collect these items

    Start with one piece of Data
    Grow it to detailed data/system response

    No data present - system response
 */