import threading
import logging

logging.basicConfig(
    level=logging.DEBUG,
    format="%(asctime)s | %(levelname)s | %(message)s"
)

def long_run():
	def factorial(n=4):
		if n == 1:
			return 1
		else:
			return n * factorial(n-1)
	
	return factorial()

t = threading.Thread(target=long_run)
#t.start()

logging.debug("start")
print(long_run())
logging.debug("finished")