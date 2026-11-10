for $language in doc("catalog.xml")/catalog/language
where $language/@category = "web"
return $language/name/text()
