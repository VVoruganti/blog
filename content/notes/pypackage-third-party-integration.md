---
title: "Third-Party Integration in Python Packages"
date: 03-13-2024
tags: ['evergreen', 'pattern', 'dev',]
---

When creating a python package there are often instances where you want to
integrate with other third-party packages. For example if you are creating an
ORM package like sqlalchemy you may want integrations with different databases,
but you may not want to take a direct dependency in your own package. 

To check for the presence of the third-party package without taking it
as a dependency the following `decorator` pattern can be used to perform the
checks. 

```python
import functools
import importlib

def requires_package(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        if importlib.util.find_spec("third-party-package") is None:
            raise ImportError("third-party-package must be installed to use this feature")
        return func(*args, **kwargs)

    return wrapper
```

Then from your individual methods or classes you can use this decorator and
import the specific module you need. 

```python
@requires_package
def integration():
    from third_party_package import module
    result = module.do_work()
```
